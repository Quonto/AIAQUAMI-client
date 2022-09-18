const Modal = () => {
  return (
    <div
      class="bootbox modal fade bootbox-confirm in"
      tabindex="-1"
      role="dialog"
      style="display: block;"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
            <button
              type="button"
              class="bootbox-close-button close"
              data-dismiss="modal"
              aria-hidden="true"
              style="margin-top: -10px;"
            >
              ×
            </button>
            <div class="bootbox-body">
              Are you sure you want to delete the project?
            </div>
          </div>
          <div class="modal-footer">
            <button
              data-bb-handler="cancel"
              type="button"
              class="btn btn-default"
            >
              Cancel
            </button>
            <button
              data-bb-handler="confirm"
              type="button"
              class="btn btn-danger"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
