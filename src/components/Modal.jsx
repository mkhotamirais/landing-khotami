import { FaXmark } from "react-icons/fa6";
import { PiSpinner } from "react-icons/pi";

export function Modal({
  children,
  onClose,
  itemId,
  modalId,
  closeBtn = false,
  confirmDel = false,
  submitDel,
  loadDel,
}) {
  return (
    <div
      onClick={onClose}
      className={`${
        modalId === itemId ? "z-50 bg-black bg-opacity-40" : "-z-10"
      } fixed inset-0 flex items-center justify-center transition-all duration-150`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`dark:bg-slate-900 bg-white ${
          modalId === itemId ? "scale-100" : "scale-0"
        } origin-top w-full sm:w-3/4 md:w-1/2 xl:w-1/3 mx-3 border rounded-lg p-4 relative transition-all duration-150`}
      >
        {closeBtn && (
          <>
            <div className="mr-8">ID: {itemId}</div>
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-xl hover:text-red-500 transition-all duration-200"
            >
              <FaXmark />
            </button>
          </>
        )}
        {children}
        {confirmDel && (
          <form onSubmit={submitDel} className="relative">
            {modalId === itemId && <input type="checkbox" autoFocus className="absolute -z-50 opacity-0" />}
            <div className="flex gap-2">
              <button
                type="submit"
                className="bg-red-500 text-white p-1 w-16 rounded hover:opacity-70 flex items-center justify-center"
              >
                {loadDel ? <PiSpinner className="animate-spin text-lg" /> : "Delete"}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="bg-slate-500 rounded p-1 px-2 text-white hover:opacity-70"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
Modal.propTypes;

export function ModalBool({
  children,
  openModal,
  title = "delete all",
  onClose,
  closeBtn,
  confirmDel,
  submitDel,
  loadDel,
}) {
  return (
    <div
      onClick={onClose}
      className={`${
        openModal ? "z-50 bg-black bg-opacity-40" : "-z-10"
      } fixed inset-0 flex items-center justify-center transition-all duration-150`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`dark:bg-slate-900 bg-white ${
          openModal ? "scale-100" : "scale-0"
        } origin-top w-full sm:w-3/4 md:w-1/2 xl:w-1/3 mx-3 border rounded-lg p-4 relative transition-all duration-150`}
      >
        {closeBtn && (
          <>
            <div className="mr-8 capitalize font-medium">{title}</div>
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-xl hover:text-red-500 transition-all duration-200"
            >
              <FaXmark />
            </button>
          </>
        )}
        {children}
        {confirmDel && (
          <form onSubmit={submitDel} className="relative">
            {openModal && <input type="checkbox" autoFocus className="absolute -z-50 opacity-0" />}
            <div className="flex gap-2">
              <button
                type="submit"
                className="bg-red-500 text-white p-1 w-16 rounded hover:opacity-70 flex items-center justify-center"
              >
                {loadDel ? <PiSpinner className="animate-spin text-lg" /> : "Delete"}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="bg-slate-500 rounded p-1 px-2 text-white hover:opacity-70"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
ModalBool.propTypes;
