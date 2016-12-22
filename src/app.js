'use strict'
import * as data from './testData';
import _ from 'underscore';

let sortedData=_.sortBy(data.testData,'name');
console.log(sortedData);