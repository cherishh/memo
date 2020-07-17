// @ts-nocheck
const listeners = [];
const state;

function dispatch(action) {
  state = reducer(state, action);
  listeners.slice().forEach(l => l());
  return action;
}

function getState() {
  return state;
}

function subscribe(listener) {
  listeners.push(listener);
  return () => {
    listeners = listeners.filter(l => l!==listener);
  }
}