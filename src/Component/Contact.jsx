import React from 'react'
const Contact = () => {
	return (
		<>
			<div className="container col-lg-8 offset-lg-1 mx-auto signup_box mt-4">
				<div className="col-12">
					<form className="p-4">
						<div className="mb-3">
							<h1 className="text-primary">Contact Us</h1>
						</div>
						<div className="row g-3">
							<div className="col-12">
								<label htmlFor="inputName" className="form-label">First Name</label>
								<input type="text" name="" className="form-control" id="inputName" placeholder='Harish sahu' />
							</div>

							<div className="col-12">
								<label htmlFor="inputEmail4" className="form-label">Email</label>
								<input type="email" name="" className="form-control" id="inputEmail4" placeholder='pushpa@gmail.com' />
							</div>
							<div className="col-12">
								<label htmlFor="Subject" className="form-label">Subject</label>
								<input type="text" name="" className="form-control" id="Subject" placeholder='Write Subject' />
							</div>
							<div className="col-12">
								<label htmlFor="Message" className="form-label">Message</label>
								<textarea name="message" className='form-control' id="msg" rows="5" placeholder='Write something about your subject...'> </textarea>
							</div>
							<div className="col-12">
								<button type="submit" name="submit" className="btn btn-primary px-3">Submit</button>
							</div>

						</div>
					</form>
				</div>
			</div>
		</>
	)
}

export default Contact
