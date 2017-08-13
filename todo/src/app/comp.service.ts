import { Injectable } from '@angular/core';
//https://stackoverflow.com/a/39613761/1345527
@Injectable()
export class CompService {
  private componentRef = null;

  constructor() { }

  getParent() {
    return this.componentRef;
  }

  setParent(ref) {
    this.componentRef = ref;
  }
}
