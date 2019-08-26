//Understand the differences between import and require
import { Course } from './string_function.js';

//Use export to Reuse a Code Block
export function Student() {
    this.firstName = '';
    this.lastName = '';
    this.course = new Course();
};

// Create an Export Fallback with export default
export default function subtract(x,y) {
    return x-y;
}