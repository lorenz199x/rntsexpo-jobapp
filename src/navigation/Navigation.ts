import {
  CommonActions,
  DrawerActions,
  StackActions,
  TabActions,
} from "@react-navigation/native";

/**
 *
 * @type {Component}
 * @returns {DrawerContent}
 * @reference https://reactnavigation.org/docs/navigation-actions/
 * @reference https://reactnavigation.org/docs/stack-actions/
 * @reference https://reactnavigation.org/docs/tab-actions/
 * @reference https://reactnavigation.org/docs/drawer-actions/
 */

/**
 * Provides navigation utilities for the application.
 */
export let navigationRef: any;

/**
 * Sets the main navigator reference.
 * @param {any} navigatorRef - The reference to set as the main navigator.
 */
const setTopLevelNavigator = (navigatorRef: any) => {
  navigationRef = navigatorRef;
};

/**
 * Gets the name of the current screen.
 * @returns {string} The name of the current screen.
 */
const getCurrentScreenName = () => {
  return navigationRef?.getCurrentRoute()?.name;
};

/** Common Navigation Actions **/

/**
 * Navigates to a specific route.
 * @param {string} name - The name of the route to navigate to.
 * @param {any} params - The parameters to pass to the route (optional).
 */
const navigate = (name: string, params?: any) => {
  if (!navigationRef || (navigationRef && !navigationRef.dispatch)) {
    return;
  }

  navigationRef.dispatch(CommonActions.navigate({ name, params }));
};

/**
 * Resets the navigation state to the given state.
 * @param {any} name - The name of the route to reset to.
 * @param {any} params - The parameters to pass to the route (optional).
 */
const reset = (name: any, params?: any) => {
  if (!navigationRef || (navigationRef && !navigationRef.dispatch)) {
    return;
  }

  navigationRef.dispatch(
    CommonActions.reset({ index: 0, routes: [{ name, params }] })
  );
};

/**
 * Goes back to the previous route in history.
 * @param {any} route - The source route.
 * @param {any} state - The target state.
 */
const goBack = (route?: any, state?: any) => {
  if (!navigationRef || (navigationRef && !navigationRef.dispatch)) {
    return;
  }

  navigationRef.dispatch({
    ...CommonActions.goBack(),
    source: route,
    target: state,
  });
};

/**
 * Updates params for a certain route.
 * @param {any} params - The parameters to update.
 */
const setParams = (params: any) => {
  if (!navigationRef || (navigationRef && !navigationRef.dispatch)) {
    return;
  }

  navigationRef.dispatch(CommonActions.setParams({ params: params }));
};

/** Stack Navigation Actions **/

/**
 * Replaces a route in the navigation state.
 * @param {string} name - The name of the route to replace.
 * @param {any} params - The parameters to pass to the route (optional).
 */
const replace = (name: string, params?: any) => {
  if (!navigationRef || (navigationRef && !navigationRef.dispatch)) {
    return;
  }

  navigationRef.dispatch(StackActions.replace(name, params));
};

/**
 * Adds a route on top of the stack and navigates forward to it.
 * @param {string} name - The name of the route to push.
 * @param {any} params - The parameters to pass to the route (optional).
 */
const push = (name: string, params?: any) => {
  if (!navigationRef || (navigationRef && !navigationRef.dispatch)) {
    return;
  }

  navigationRef.dispatch(StackActions.push(name, params));
};

/**
 * Takes you back to a previous screen in the stack.
 * @param {number} count - The number of screens to pop.
 */
const pop = (count: number) => {
  if (!navigationRef || (navigationRef && !navigationRef.dispatch)) {
    return;
  }

  navigationRef.dispatch(StackActions.pop(count));
};

/**
 * Pops all the screens in the stack except the first one.
 */
const popToTop = () => {
  if (!navigationRef || (navigationRef && !navigationRef.dispatch)) {
    return;
  }

  navigationRef.dispatch(StackActions.popToTop());
};

/** Tab Navigation Actions **/

/**
 * Jumps to an existing route in the tab navigator.
 * @param {any} name - The name of the route to jump to.
 * @param {any} params - The parameters to pass to the route (optional).
 */
const jumpToTab = (name: any, params?: any) => {
  if (!navigationRef || (navigationRef && !navigationRef.dispatch)) {
    return;
  }

  navigationRef.dispatch(TabActions.jumpTo(name, params));
};

/** Drawer Navigation Actions **/

/**
 * Opens the drawer pane.
 */
const openDrawer = () => {
  if (!navigationRef || (navigationRef && !navigationRef.dispatch)) {
    return;
  }

  navigationRef.dispatch(DrawerActions.openDrawer());
};

/**
 * Closes the drawer pane.
 */
const closeDrawer = () => {
  if (!navigationRef || (navigationRef && !navigationRef.dispatch)) {
    return;
  }

  navigationRef.dispatch(DrawerActions.closeDrawer());
};

/**
 * Toggles the drawer pane (open if closed, close if open).
 */
const toggleDrawer = () => {
  if (!navigationRef || (navigationRef && !navigationRef.dispatch)) {
    return;
  }

  navigationRef.dispatch(DrawerActions.toggleDrawer());
};

/**
 * Jumps to an existing route in the drawer navigator.
 * @param {any} name - The name of the route to jump to.
 * @param {any} params - The parameters to pass to the route (optional).
 */
const jumpToDrawer = (name: any, params?: any) => {
  if (!navigationRef || (navigationRef && !navigationRef.dispatch)) {
    return;
  }

  navigationRef.dispatch(DrawerActions.jumpTo(name, params));
};

export default {
  setTopLevelNavigator,
  getCurrentScreenName,
  navigate,
  reset,
  goBack,
  setParams,
  replace,
  push,
  pop,
  popToTop,
  jumpToTab,
  openDrawer,
  closeDrawer,
  toggleDrawer,
  jumpToDrawer,
};
