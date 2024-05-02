import * as Actions from "./action-types";

// Navigation Metadata Action
export const getNavigationMetadataData = (data) => {
  return {
    type: Actions.GET_NAVIGATION_META_DATA_INIT,
    data: data,
  };
};

// user preference

export const getDefaultUserPreferenceAction = (data) => {
  return {
    type: Actions.GET_DEFAULT_USER_PREFERENCE_INIT,
    data: data,
  };
};

// Feature Flags
export const getFeatureFlagsAction = (data) => {
  return {
    type: Actions.GET_FEATURE_FLAG_INIT,
    data: data,
  };
};
