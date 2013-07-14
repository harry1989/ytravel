exports.home = function(req, res) {
  res.render('index', {
      title: 'Y!Travel',
      description: 'App which will suggest the details while travelling',
      author: ''
  });
};
