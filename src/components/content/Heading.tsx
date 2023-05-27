import { Button } from '../UI/Button/Button';

export const Heading = () => {
  return (
    <div className='heading__wrapper'>
      <div className="heading__col-1">
        <h1>Hello, Anna!</h1>
        <p>Send and receive funds with pleasure.</p>
      </div>
      <div className="heading__col-2">
        <Button>Add Payment +</Button>
        <span>...</span>
      </div>
    </div>
  );
};
