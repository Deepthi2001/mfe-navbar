import { combineReducers } from "redux";
import { Map as ImmutableMap, fromJS } from "immutable";

import * as Actions from "../actions/action-types";
import * as ApplicationConstants from "../../constants/application";

import { reduxState } from "../../modules/utilities";

//Get navigation Metadata
const navigationMetadata = (state, action) => {
  const { status = 0, data = {} } = action;

  if (state === undefined) {
    return ImmutableMap({
      [ApplicationConstants.PROP_INITIALIZED]: false,
      [ApplicationConstants.PROP_FETCHING]: false,
      [ApplicationConstants.PROP_ERROR]: false,
      [ApplicationConstants.PROP_STATUS]: status,
      [ApplicationConstants.PROP_DATA]: ImmutableMap(data),
    });
  }
  switch (action.type) {
    case Actions.GET_NAVIGATION_META_DATA_INIT:
      return state.withMutations((newState) => {
        newState.set(ApplicationConstants.PROP_INITIALIZED, false);
        newState.set(ApplicationConstants.PROP_FETCHING, true);
        newState.set(ApplicationConstants.PROP_ERROR, false);
        newState.set(ApplicationConstants.PROP_STATUS, status);
        newState.set(ApplicationConstants.PROP_OTHER, ImmutableMap(data));
      });

    case Actions.GET_NAVIGATION_META_DATA_SUCCESS:
      return state.withMutations((newState) => {
        newState.set(ApplicationConstants.PROP_INITIALIZED, true);
        newState.set(ApplicationConstants.PROP_FETCHING, false);
        newState.set(ApplicationConstants.PROP_ERROR, false);
        newState.set(ApplicationConstants.PROP_STATUS, status);
        newState.set(ApplicationConstants.PROP_DATA, fromJS(data));
      });

    case Actions.GET_NAVIGATION_META_DATA_FAIL:
      return state.withMutations((newState) => {
        newState.set(ApplicationConstants.PROP_INITIALIZED, false);
        newState.set(ApplicationConstants.PROP_FETCHING, false);
        newState.set(ApplicationConstants.PROP_ERROR, true);
        newState.set(ApplicationConstants.PROP_STATUS, status);
        newState.set(ApplicationConstants.PROP_DATA, fromJS(data));
      });
    default:
      return state;
  }
};

// User Preference
const userPreference = (state, action) => {
  const status = action.status || 0;
  const data = action.data || {};

  if (state === undefined) {
    return ImmutableMap({
      [ApplicationConstants.PROP_INITIALIZED]: false,
      [ApplicationConstants.PROP_FETCHING]: false,
      [ApplicationConstants.PROP_ERROR]: false,
      [ApplicationConstants.PROP_STATUS]: status,
      [ApplicationConstants.PROP_DATA]: ImmutableMap(data),
    });
  }

  switch (action.type) {
    case Actions.GET_DEFAULT_USER_PREFERENCE_INIT:
      return state.withMutations((newState) => {
        newState.set(ApplicationConstants.PROP_INITIALIZED, false);
        newState.set(ApplicationConstants.PROP_FETCHING, true);
        newState.set(ApplicationConstants.PROP_ERROR, false);
        newState.set(ApplicationConstants.PROP_STATUS, status);
        newState.set(ApplicationConstants.PROP_OTHER, ImmutableMap(data));
      });

    case Actions.GET_DEFAULT_USER_PREFERENCE_SUCCESS:
      return state.withMutations((newState) => {
        newState.set(ApplicationConstants.PROP_INITIALIZED, true);
        newState.set(ApplicationConstants.PROP_FETCHING, false);
        newState.set(ApplicationConstants.PROP_ERROR, false);
        newState.set(ApplicationConstants.PROP_STATUS, status);
        newState.set(ApplicationConstants.PROP_DATA, fromJS(data));
      });

    case Actions.GET_DEFAULT_USER_PREFERENCE_FAIL:
      return state.withMutations((newState) => {
        newState.set(ApplicationConstants.PROP_INITIALIZED, false);
        newState.set(ApplicationConstants.PROP_FETCHING, false);
        newState.set(ApplicationConstants.PROP_ERROR, true);
        newState.set(ApplicationConstants.PROP_STATUS, status);
        newState.set(ApplicationConstants.PROP_DATA, fromJS(data));
      });
    default:
      return state;
  }
};

// Feature Flag
const featureFlag = (state, action) => {
  const status = action.status || 0;
  const data = action.data || {};

  if (state === undefined) {
    return ImmutableMap({
      [ApplicationConstants.PROP_INITIALIZED]: false,
      [ApplicationConstants.PROP_FETCHING]: false,
      [ApplicationConstants.PROP_ERROR]: false,
      [ApplicationConstants.PROP_STATUS]: status,
      [ApplicationConstants.PROP_DATA]: ImmutableMap(data),
    });
  }

  switch (action.type) {
    case Actions.GET_FEATURE_FLAG_INIT:
      return state.withMutations((newState) => {
        newState.set(ApplicationConstants.PROP_INITIALIZED, false);
        newState.set(ApplicationConstants.PROP_FETCHING, true);
        newState.set(ApplicationConstants.PROP_ERROR, false);
        newState.set(ApplicationConstants.PROP_STATUS, status);
        newState.set(ApplicationConstants.PROP_OTHER, ImmutableMap(data));
      });

    case Actions.GET_FEATURE_FLAG_SUCCESS:
      return state.withMutations((newState) => {
        newState.set(ApplicationConstants.PROP_INITIALIZED, true);
        newState.set(ApplicationConstants.PROP_FETCHING, false);
        newState.set(ApplicationConstants.PROP_ERROR, false);
        newState.set(ApplicationConstants.PROP_STATUS, status);
        newState.set(ApplicationConstants.PROP_DATA, fromJS(data));
      });

    case Actions.GET_FEATURE_FLAG_FAIL:
      return state.withMutations((newState) => {
        newState.set(ApplicationConstants.PROP_INITIALIZED, false);
        newState.set(ApplicationConstants.PROP_FETCHING, false);
        newState.set(ApplicationConstants.PROP_ERROR, true);
        newState.set(ApplicationConstants.PROP_STATUS, status);
        newState.set(ApplicationConstants.PROP_DATA, fromJS(data));
      });

    default:
      return state;
  }
};

export default combineReducers({
  featureFlag,
  userPreference,
  navigationMetadata,
});
