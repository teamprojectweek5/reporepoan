import axios from "axios";

function getDataBegin() {
	return {
		type: "GET_DATA_BEGIN"
	};
}

function getDataSuccess(result) {
	return {
		type: "GET_DATA_SUCCESS",
		result
	};
}

function getDataFailed(error) {
	return {
		type: "GET_DATA_ERROR",
		error
	};
}

export function getData() {
	return function(dispatch) {
		dispatch(getDataBegin());

        axios
        .get("https://randomuser.me/api/?results=10")
        // .then(result => dispatch(getDataSuccess(result.data.diff.picture.data[0].picture.large)))
        .then(result => {dispatch(getDataSuccess(result.data.results))
        console.log(result.data.results)})
        .catch(error => dispatch(getDataFailed(error.message)));
	};
}
