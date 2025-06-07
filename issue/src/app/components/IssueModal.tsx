import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createIssue } from '../redux/issueSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppDispatch } from '../store';

const IssueModal = () => {
  const [show, setShow] = useState(false);
  const [issueData, setIssueData] = useState({
    title: '',
    description: '',
    status: 'Open',
    assignedTo: '',
    createdBy: '',
  });

  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setIssueData({ ...issueData, [e.target.name]: e.target.value });
  };
  

  const handleSubmit = () => {
    dispatch(createIssue(issueData));
    setShow(false);
  };

  return (
    <>
      <button className="btn btn-primary" onClick={() => setShow(true)}>
        Create Issue
      </button>

      {show && (
        <div className="modal d-block" tabIndex={-1}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Raise New Issue</h5>
                <button type="button" className="btn-close" onClick={() => setShow(false)} />
              </div>
              <div className="modal-body">
                <input className="form-control mb-2" name="title" placeholder="Title" value={issueData.title} onChange={handleChange} />
                <textarea className="form-control mb-2" name="description" placeholder="Description" value={issueData.description} onChange={handleChange} />
                <input className="form-control mb-2" name="assignedTo" placeholder="Assigned To" value={issueData.assignedTo} onChange={handleChange} />
                <input className="form-control" name="createdBy" placeholder="Created By" value={issueData.createdBy} onChange={handleChange} />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShow(false)}>
                  Cancel
                </button>
                <button type="button" className="btn btn-success" onClick={handleSubmit}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default IssueModal;
