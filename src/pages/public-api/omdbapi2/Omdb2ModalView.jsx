import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LoadingModal, Modal } from "../../../components/Modal";
import { emptyDataImdb, getMovieByImdb } from "../../../redux/features/omdbapiSlice";

const Omdb2ModalView = ({ itemId, onClose, modalViewId }) => {
  const { dataImdb, statusImdb } = useSelector((state) => state.omdbapi);
  const dispatch = useDispatch();
  useEffect(() => {
    if (itemId === modalViewId) {
      dispatch(emptyDataImdb());
      dispatch(getMovieByImdb(modalViewId));
    }
  }, [dispatch, modalViewId, itemId]);
  let content;
  if (statusImdb === "loading") content = <LoadingModal />;
  else if (statusImdb === "succeeded") {
    content = (
      <Modal itemId={itemId} modalId={modalViewId} onClose={onClose} closeBtn="true">
        <div>
          <div>
            <b>Title</b> : {dataImdb?.Title}
          </div>
          <div>
            <b>Country</b> : {dataImdb?.Country}
          </div>
          <div>
            <b>Genre</b> : {dataImdb?.Genre}
          </div>
          <div>
            <b>Released</b> : {dataImdb?.Released}
          </div>
          <div>
            <b>Runtime</b> : {dataImdb?.Runtime}
          </div>
          <div>
            <b>Type</b> : {dataImdb?.Type}
          </div>
          <div>
            <b>Year</b> : {dataImdb?.Year}
          </div>
          <div>
            <b>Imdb Rating</b> : {dataImdb?.imdbRating}
          </div>
          <div>
            <b>Writer</b> : {dataImdb?.Writer}
          </div>
          <div>
            <b>Plot</b> : {dataImdb?.Plot}
          </div>
        </div>
      </Modal>
    );
  }
  return content;
};
Omdb2ModalView.propTypes;

export default Omdb2ModalView;
