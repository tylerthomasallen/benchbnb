export const fetchNewUser = (user) => {
  return $.ajax ({
    method: 'POST',
    url: '/api/user',
    data: {
      user
    }
  });
};

export const fetchLogoutUser = () => {
  return $.ajax ({
    method: 'DELETE',
    url: 'api/session'
  });
};

export const fetchLoginUser = (user) => {
  return $.ajax ({
    method: 'POST',
    url: 'api/session',
    data: {
      user
    }
  });
};
