var Range = function(start, end, step) {
  typeof start === 'number' ? this.start = start : this.start = null;
  typeof end === "number" ? this.end = end : this.end = null;
  if (step) {
    this.step = step;
  }
  else {
    if (start > end) {
      this.step = -1;
    }
    else {
      this.step = 1;
    }
  }
};

Range.prototype.size = function () {
  let node = this.start;
  let count = 0;
  while (node != null) {
    count++;
    // (-) negative
    if (this.step < 0) {
      if(node + this.step >= this.end) {
        node = node + this.step;
      }
      else node = null;
    }
    // (+) positive
    else if (this.step > 0) {
      if(node + this.step <= this.end) {
        node = node + this.step;
      }
      else node = null;
    }
    else node = null;
  }
  return count;
};

Range.prototype.each = function (callback) {
  let node = this.start;
  while (node != null) {
    callback(node);
    // (-) negative
    if (this.step < 0) {
      if(node + this.step >= this.end) {
        node = node + this.step;
      }
      else node = null;
    }
    // (+) positive
    else if (this.step > 0) {
      if(node + this.step <= this.end) {
        node = node + this.step;
      }
      else node = null;
    }
    else node = null;
  }
  // if(this.end === 0) callback(this.end)
};

Range.prototype.includes = function (val) {
  let node = this.start;
  while (node) {
    if(node === val) {
      return true;
    }
    // (-) negative
    if (this.step < 0) {
      if(node + this.step >= this.end) {
        node = node + this.step
      }
      else node = null;
    }
    // (+) positive
    else if (this.step > 0) {
      if(node + this.step <= this.end) {
        node = node + this.step;
      }
      else node = null;
    }
    else node = null;
  }
  return false;
};

let aRange = new Range(10,0,-1);
aRange.each((n) => {
  console.log(n)
})
