import Emails from './email.service';

const apiEmail = () => ({
  Emails: () => ({ ...Emails}),
});

export default apiEmail;