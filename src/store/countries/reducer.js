import { createReducer } from '@reduxjs/toolkit';
import * as actions from './actions';

const initialState = {
	countries: [],
	loading: false,
	searchValue: '',
	currentId: '',
};

const reducer = createReducer(initialState, (builder) => {
	builder
		.addCase(actions.updateSearchValue, (state, action) => {
			state.searchValue = action.payload;
		})
		.addCase(actions.fetchCountriesSuccess, (state, action) => {
			state.countries = action.payload;
		})
		.addCase(actions.fetchCountriesFailure, (state, action) => {
			state.errorMessage = action.payload;
		})
		.addCase(actions.showLoader, (state) => {
			state.loading = true;
		})
		.addCase(actions.hideLoader, (state) => {
			state.loading = false;
		})
		.addCase(actions.getCountryId, (state, action) => {
			state.currentId = action.payload;
		})
		.addDefaultCase((state) => state);
});

export default reducer;
