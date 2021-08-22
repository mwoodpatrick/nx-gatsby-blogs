import { GetStaticProps } from 'next';
import './about.module.css';

/* eslint-disable-next-line */
export interface AboutProps {
  name: string;
}

export function About(props: AboutProps) {
  return (
    <div>
      <h1>Welcome to the About Page {props.name} !</h1>
    </div>
  );
}

export const getStaticProps: GetStaticProps<AboutProps> = async (context) => {
  return {
    props: {
      name: 'Mark',
    },
  };
};

export default About;
