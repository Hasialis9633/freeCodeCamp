import { Modal } from '@freecodecamp/react-bootstrap';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { createSelector } from 'reselect';

import { closeModal } from '../../redux/actions';
import { isSurveyModalOpenSelector } from '../../redux/selectors';
import { isProcessingSelector } from '../../../../redux/selectors';
import FoundationalCSharpSurvey from './foundational-c-sharp-survey';

interface SurveyModalProps {
  closeSurveyModal: () => void;
  isProcessing: boolean;
  isSurveyModalOpen: boolean;
}

const mapStateToProps = createSelector(
  isProcessingSelector,
  isSurveyModalOpenSelector,
  (isProcessing: boolean, isSurveyModalOpen: boolean) => ({
    isProcessing,
    isSurveyModalOpen
  })
);

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      closeSurveyModal: () => closeModal('survey')
    },
    dispatch
  );

function SurveyModal({
  closeSurveyModal,
  isSurveyModalOpen,
  isProcessing
}: SurveyModalProps): JSX.Element {
  return (
    <Modal
      animation={false}
      dialogClassName='survey-modal'
      keyboard={true}
      onHide={() => (isProcessing ? '' : closeSurveyModal())}
      show={isSurveyModalOpen}
    >
      <FoundationalCSharpSurvey />
    </Modal>
  );
}

SurveyModal.displayName = 'SurveyModal';

export default connect(mapStateToProps, mapDispatchToProps)(SurveyModal);
