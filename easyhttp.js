function easyhttp() {
  this.http = new XMLHttpRequest();
}

//Get Request
easyhttp.prototype.getPosts = function (url, callback) {
  this.http.open('GET', url, true);

  let self = this;
  this.http.onload = function () {
    if (self.http.status === 200) {
      callback(null, JSON.parse(self.http.responseText));
    } else {
      callback('Error: ' + self.http.status);
    }
  }

  this.http.send();
}

//Post Request
easyhttp.prototype.createPost = function (url, data, callback) {
  this.http.open('POST', url, true);

  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;
  this.http.onload = function () {
    if (self.http.status === 201) {
      callback(null, JSON.parse(self.http.responseText));
    }
    else {
      callback('Error: ' + self.http.status);
    }
  }
  this.http.send(JSON.stringify(data));
}

//Put request
easyhttp.prototype.updatePost = function (url, data, callback) {
  this.http.open('PUT', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;
  this.http.onload = function(){
    callback(null, JSON.parse(self.http.responseText));
  }

  this.http.send(JSON.stringify(data));
}

//Delete Request
easyhttp.prototype.deletePost = function (url, callback) {
  this.http.open('DELETE', url, true);

  let self = this;
  this.http.onload = function () {
    if (self.http.status === 200) {
      callback(null, 'Post deleted');
    } else {
      callback('Error: ' + self.http.status);
    }
  }

  this.http.send();
}