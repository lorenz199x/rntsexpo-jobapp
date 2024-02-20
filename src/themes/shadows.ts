export default {
  /**
   * A custom style for shadow.
   *
   * @param elevation - The elevation of the container. (Android)
   * @param shadowColor - The color of the shadow. (iOS)
   * @param shadowOpacity - The shadow of the shadow. (iOS)
   * @param shadowRadius - The radius of the shadow. (iOS)
   * @type {Function}
   * @returns {Object}
   */
  default: (
    elevation: number = 5,
    shadowColor: string = '#000',
    shadowOpacity: number = 0.2,
    shadowRadius: number = 1
  ) => {
    return {
      elevation: elevation || 5,
      shadowColor: shadowColor,
      shadowOffset: { width: 0.5, height: 1 },
      shadowOpacity: shadowOpacity,
      shadowRadius: shadowRadius,
    };
  },
};
