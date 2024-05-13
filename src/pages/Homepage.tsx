import { FC } from 'react';
import Layout from '../components/Layout';
import Btn from '../components/UI/Btn';
import DocumentsList from '../components/Documents/DocumentsList';

const Homepage: FC = () => {
  const onClickHanlder = () => {
    console.log('true');
  };

  return (
    <Layout className="documents">
      <div className="flex gap-4 items-center justify-between mb-5">
        <h1 className="title">Documents</h1>
        <Btn className="flex items-center gap-1" handler={onClickHanlder}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
          >
            <path d="M11 5H9v4H5v2h4v4h2v-4h4V9h-4V5z"></path>
          </svg>
          Create New
        </Btn>
      </div>
      <DocumentsList />
    </Layout>
  );
};

export default Homepage;
