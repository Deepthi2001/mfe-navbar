// import { takeLatest, put, call } from "redux-saga/effects";

// import { generateAPI } from "@wmt-cnnt/common-functions";
// import { service } from "../../utils/service";
// import getConfiguration from "../../utils/configuration";
// import * as Actions from "../actions/action-types";

// const config = getConfiguration();

// // Get Navigation Metadata
// export function* watchNavigationMetadata() {
//   yield takeLatest(
//     Actions.GET_NAVIGATION_META_DATA_INIT,
//     callNavigationMetadata
//   );
// }

// export function* callNavigationMetadata(action) {
//   yield call(fetchNavigationMetadata, action.data);
// }

// export function* fetchNavigationMetadata(data) {
//   const url = generateAPI(config.platform.navigationMetadata, data);
//   try {
//     const response = yield call(service.api, "get", url);
//     const { status, data } = response;

//     yield put({
//       type: Actions.GET_NAVIGATION_META_DATA_SUCCESS,
//       status: status,
//       data: data,
//     });
//   } catch (error) {
//     const status = error.response ? error.response.status : 500;

//     yield put({
//       type: Actions.GET_NAVIGATION_META_DATA_FAIL,
//       status: status,
//       data: {},
//     });
//   }
// }

// // User Preference
// export function* watchUserPreferenceData() {
//   yield takeLatest(
//     Actions.GET_DEFAULT_USER_PREFERENCE_INIT,
//     callUserPreferenceAction
//   );
// }

// export function* callUserPreferenceAction(action) {
//   yield call(fetchUserPreferenceData, action.data);
// }

// function getUserPrefFetchUrl(data) {
//   return generateAPI(config.userPreference.userPreferenceFetchV3, data);
// }

// export function* fetchUserPreferenceData(data) {
//   const url = getUserPrefFetchUrl(data);
//   try {
//     const response = yield call(service.api, "get", url);

//     const { status, data } = response;

//     yield put({
//       type: Actions.GET_DEFAULT_USER_PREFERENCE_SUCCESS,
//       status: status,
//       data: data,
//     });
//   } catch (error) {
//     const status = error.response ? error.response.status : 500;
//     const data = error.response ? error.response
//       : { response: error.toString() };

//     yield put({
//       type: Actions.GET_DEFAULT_USER_PREFERENCE_FAIL,
//       status: status,
//       data: data,
//     });
//   }
// }

// // Feature Flag

// export function* watchFeatureFlagData() {
//   yield takeLatest(Actions.GET_FEATURE_FLAG_INIT, callFeatureFlagAction);
// }

// export function* callFeatureFlagAction(action) {
//   yield call(fetchFeatureFlagData, action.data);
// }

// export function* fetchFeatureFlagData(data) {
//   const url = generateAPI(config.featureFlag, data);
//   try {
//     const response = yield call(service.api, "get", url);

//     const { status, data } = response;

//     yield put({
//       type: Actions.GET_FEATURE_FLAG_SUCCESS,
//       status: status,
//       data: data,
//     });
//   } catch (error) {
//     const status = error.response ? error.response.status : 500;
//     const data = error.response    ? error.response
//       : { response: error.toString() };

//     yield put({
//       type: Actions.GET_FEATURE_FLAG_FAIL,
//       status: status,
//       data: data,
//     });
//   }
// }
