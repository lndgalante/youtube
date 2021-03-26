/*

Si en algún proyecto tenes código legacy en redux y quisieras hacer un refactor
podes hacerlo usando los hooks de redux y creando un custom hook,
para poder compartir una porción de estado en varios componentes, y a la vez facilitando el testeo del mismo.

*/

// old way

// 1. Componente con mapStateToProps y mapDispatchToProps

import React from 'react';
import { connect } from 'react-redux';

import { toggleAction } from './store/toggleActions';

function Toggle({ on, toggle }) {
  return <button onClick={toggle}>{on ? 'on' : 'off'}</button>;
}

const mapStateToProps = (state) => ({
  on: state.toggle.on,
});

const mapDispatchToProps = {
  toggle: toggleAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);

// improvement with redux hooks

// 2. Componente con useDispatch y useSelector

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { toggleAction } from './store/toggleActions';

function Toggle() {
  // redux hooks
  const dispatch = useDispatch();
  const on = useSelector((state) => state.toggle.on);

  // handlers
  function dispatchToggleAction() {
    dispatch(toggleAction());
  }

  return <button onClick={dispatchToggleAction}>{on ? 'on' : 'off'}</button>;
}

export default Toggle;

// improvement with custom hooks

// 3. Componente con custom hook "useToggle"

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { toggleAction } from './store/toggleActions';

// Este custom hook vive en su propio file
function useToggle() {
  // redux hooks
  const dispatch = useDispatch();
  const on = useSelector((state) => state.toggle.on);

  // handlers
  function dispatchToggleAction() {
    dispatch(toggleAction());
  }

  return { on, dispatchToggleAction };
}

function Toggle() {
  const { on, dispatchToggleAction } = useToggle();

  return <button onClick={dispatchToggleAction}>{on ? 'on' : 'off'}</button>;
}

export default Toggle;
