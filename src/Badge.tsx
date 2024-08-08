import { PropsWithChildren } from 'react';

interface IBadge {
  name: string;
  handle: string;
  img: string;
}

const Badge = ({ children, name, handle, img }: PropsWithChildren<IBadge>) => {
  return (
    <div className="badge">
      <img alt={'github profile'} src={img} />
      <div>
        <h4>{name}</h4>
        <p>@{handle}</p>
        {children}
      </div>
    </div>
  );
};

export default Badge;
