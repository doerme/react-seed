import { SETZLD, SETZLW, SETZL, SETTLD, SETTLW, SETTL, SETTOPMENU, SETSECONDMENU, SETCRD, SETRULE, SETWAIT, SETUSER } from '../constants'

export function setzld(n) {
  return {
    type: SETZLD,
    data: n
  }
}

export function setzlw(n) {
  return {
    type: SETZLW,
    data: n
  }
}

export function setzl(n) {
  return {
    type: SETZL,
    data: n
  }
}

export function settld(n) {
  return {
    type: SETTLD,
    data: n
  }
}

export function settlw(n) {
  return {
    type: SETTLW,
    data: n
  }
}

export function settl(n) {
  return {
    type: SETTL,
    data: n
  }
}

export function settopmenu(n) {
  return {
    type: SETTOPMENU,
    data: n
  }
}

export function setsecondmenu(n) {
  return {
    type: SETSECONDMENU,
    data: n
  }
}

export function setcrd(n) {
  return {
    type: SETCRD,
    data: n
  }
}

export function setrule(n){
  return {
    type: SETRULE,
    data: n
  }
}

export function setwait(n){
  return {
    type: SETWAIT,
    data: n
  }
}

export function setuser(n){
  return {
    type: SETUSER,
    data: n
  }
}