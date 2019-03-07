import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import {useAsyncAction} from "../useAsyncAction";

const getData = async (dispatch, getState) => {
    await sleep(2000);
    dispatch({ type: "contrivedDataReceived", payload: "that data!!!" });
};

const DemoSuspenseWrapper = () => {
  return (
      <div>
          <h1>Demo 9</h1>
          <Suspense fallback={<div>Loading...</div>}>
              <DemoNine />
          </Suspense>
      </div>
  )
};

export default DemoSuspenseWrapper;


const DemoNineComponent = ({contrivedString}) => {
    useAsyncAction(getData);

    return (
        <div>{contrivedString}</div>
    );
};

function mapStateToProps(state) {
    return {
        contrivedString: state.contrivedData.contrivedString ? state.contrivedData.contrivedString : null
    };
}

const DemoNine = connect(mapStateToProps, {})(DemoNineComponent);

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
