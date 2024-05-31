import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function MyAlert({isShow,title,msg}) {
  const [show, setShow] = useState(isShow ? isShow : false);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>{title ? title: 'Oh snap! You got an error!'}</Alert.Heading>
        <p>
          {msg ? msg : 'Unable to load page'}
        </p>
      </Alert>
    );
  }
//   we remove the btn to dynamically alert the users on event results
//   return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}

export default MyAlert;