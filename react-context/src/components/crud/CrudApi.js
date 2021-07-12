import React, { useContext } from 'react';
import Loader from './Loader';
import Message from './Message';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import CrudContext from '../../context/CrudContext';

const CrudApi = () => {
  const { db, loading, error } = useContext(CrudContext);
  return (
    <div>
      <b>CRUD Api con Context Api</b>
      <article className="grid-1-2">
        <CrudForm />
        {loading && <Loader />}
        {error && (
          <Message
            msg={`Error ${error.status}: ${error.statusText}`}
            bgColor="#dc3545"
          />
        )}
        {db && <CrudTable />}
      </article>
    </div>
  );
};

export default CrudApi;
