import { HttpHeaders } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { Utils } from './utils.service';

describe('Utils', () => {
  let utils: Utils;

  it('should be created', () => {
    expect(utils).toBeTruthy();
  });

  it('should return the headers', () => {
    const token = 'Hello';
    const expected = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    }

    const headers = utils.getHeaders(token)
    expect(headers).toBe(expected);

  })
});
