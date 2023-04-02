export const getMenuStyles = (menuOpened) => {
  if (document.documentElement.clientWidth <= 700) {
    ///console.log("modibe version ");
    return { left: menuOpened && "-100%" };
  }
};

export const topTopBottom = {
  hidden: {
    opacity: 0,
    y: -40,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 0.5,
    },
  },
};
const bottomTopTop = {
  hidden: {
    opacity: 0,
    y: 40,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 0.2,
    },
  },
};
const lowBottomTopTop = {
  hidden: {
    opacity: 0,
    y: 40,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 0.5,
      duration: 1,
    },
  },
};
export const technologieVariant = {
  hidden: {
    opacity: 0,
    y: 40,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 0.3,
      duration: 0.6,
    },
  },
};
export const titreVariant = {
  hidden: {
    opacity: 0,
    y: 60,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 0.5,
      duration: 0.5,
    },
  },
};

const toLeft = {
  hidden: {
    opacity: 0,
    x: 40,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 0.6,
    },
  },
};
const toRight = {
  hidden: {
    opacity: 0,
    x: -40,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 0.7,
    },
  },
};

export { toLeft, toRight, bottomTopTop, lowBottomTopTop };
