#!/bin/bash

set -euo pipefail

# Verifica se foi passado um nome de módulo
if [ -z "${1:-}" ]; then
  echo "❌ Por favor, informe o nome do módulo. Exemplo: ./create-module.sh dashboard"
  exit 1
fi

# Formatação do nome
MODULE_NAME=$(echo "$1" | tr '[:upper:]' '[:lower:]')
CAPITALIZED_NAME="$(tr '[:lower:]' '[:upper:]' <<< ${MODULE_NAME:0:1})${MODULE_NAME:1}"

# Caminho base
BASE_PATH="src/modules/$MODULE_NAME"

# Verifica se já existe
if [ -d "$BASE_PATH" ]; then
  read -p "⚠️ O módulo '$MODULE_NAME' já existe. Deseja sobrescrever? (s/N) " resp
  if [[ ! "$resp" =~ ^[sS]$ ]]; then
    echo "🚫 Operação cancelada."
    exit 0
  fi
fi

# Cria os diretórios
mkdir -p "$BASE_PATH"/{components,hooks,services,utils}

### === Criação dos arquivos com conteúdo === ###

# index.js
cat <<EOF > "$BASE_PATH/index.js"
// Exporta tudo o que o resto da aplicação pode usar do módulo '$MODULE_NAME'
export * from './components';
export * from './hooks';
export * from './services';
export * from './utils';
EOF

# Hook
cat <<EOF > "$BASE_PATH/hooks/use$CAPITALIZED_NAME.js"
export function use$CAPITALIZED_NAME() {
  return {};
}
EOF

# Componente
cat <<EOF > "$BASE_PATH/components/${CAPITALIZED_NAME}.jsx"
import React from 'react';

export function ${CAPITALIZED_NAME}() {
  return <div>${CAPITALIZED_NAME} Component</div>;
}
EOF

# components/index.js
cat <<EOF > "$BASE_PATH/components/index.js"
export * from './${CAPITALIZED_NAME}';
EOF

# Service com fetch
cat <<EOF > "$BASE_PATH/services/${MODULE_NAME}Service.js"
export class ${CAPITALIZED_NAME}Service {
  async get$CAPITALIZED_NAME(request = {}) {
    const response = await fetch('/api/$MODULE_NAME', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(request),
    });
    return await response.json();
  }
}
EOF

echo "✅ Módulo '$MODULE_NAME' criado com sucesso em: $BASE_PATH"
