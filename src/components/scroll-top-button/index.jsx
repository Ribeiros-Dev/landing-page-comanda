'use client';

import {IconButton} from '@chakra-ui/react';
import React from 'react';
import {LuArrowUp} from 'react-icons/lu';

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  React.useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <React.Fragment>
      {isVisible && (
        <IconButton
          onClick={scrollToTop}
          position="fixed"
          bottom="4"
          right="4"
          w="12"
          h="12"
          borderRadius="full"
          borderWidth={2}
          display="flex"
          alignItems="center"
          justifyContent="center"
          transition="all 0.3s"
          zIndex="50"
          colorPalette="orange"
          variant={'outline'}
          aria-label="return to top"
        >
          <LuArrowUp color="orange.500" />
        </IconButton>
      )}
    </React.Fragment>
  );
}
