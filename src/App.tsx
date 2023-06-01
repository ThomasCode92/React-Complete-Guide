import React, { Fragment, useState } from 'react';

import MainHeader from './components/layout/MainHeader';
import PostsList from './components/PostsList';

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const showModalHandler = () => {
    setModalIsVisible(true);
  };

  const hideModalHandler = () => {
    setModalIsVisible(false);
  };

  return (
    <Fragment>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostsList
          modalIsVisible={modalIsVisible}
          onCloseModal={hideModalHandler}
        />
      </main>
    </Fragment>
  );
}

export default App;
