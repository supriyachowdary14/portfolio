import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import { useSearchParams , createSearchParams,useNavigate} from 'react-router-dom';
function Forms() {
  const [searchparams]= useSearchParams();
  console.log(searchparams.get('id'));
  const { Formik } = formik;
  const schema = yup.object().shape({
    firstName: yup.string().required('firstname is required'),
    lastName: yup.string().required('lastname is required'),
    email: yup.string().email("Please enter a valid email").required("Required"),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().matches(/^[0-9]{6}$/, 'Must be exactly 6 digits').required(),
    password: yup.string().required('Password is required'),
    confirmpassword: yup.string().oneOf([yup.ref('password'), null], 'confirmpassword doesnot match with password').required(),
    file:yup.mixed().required('file must be lessthan 1MB'),
    terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
  });
  const navigate = useNavigate();
  return (
    <>
    <Formik
   onSubmit={(values) => {
    console.log('values after submit', values);
    const formvalues = JSON.stringify(values);
      navigate({
        pathname:'/about',
        search:createSearchParams({
          id:formvalues
        }).toString()
      });
  }}
      validationSchema={schema}
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        city: '',
        state: '',
        zip: '',
        password:'',
        confirmpassword:'',
        file: null,
        terms: false,

      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate className="mb-3 forms-expand-lg forms-dark bg-dark" onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationFormikName">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                isInvalid={!!errors.firstName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.firstName}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormiklastname">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                isInvalid={!!errors.lastName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.lastName}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormikemail">
              <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationFormikcity">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                name="city"
                value={values.city}
                onChange={handleChange}
                isInvalid={!!errors.city}
              />
              <Form.Control.Feedback type="invalid">
                {errors.city}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormikState">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="State"
                name="state"
                value={values.state}
                onChange={handleChange}
                isInvalid={!!errors.state}
              />
              <Form.Control.Feedback type="invalid">
                {errors.state}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormikzip">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                type="number"
                placeholder="Zip"
                name="zip"
                value={values.zip}
                onChange={handleChange}
                isInvalid={!!errors.zip}
              />

              <Form.Control.Feedback type="invalid">
                {errors.zip}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-6">
            <Form.Group as={Col} md="6" controlId="validationFormikpassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={values.password}
                onChange={handleChange}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationFormikconfirmpassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="confirmpassword"
                value={values.confirmpassword}
                onChange={handleChange}
                isInvalid={!!errors.confirmpassword}
              />
              <Form.Control.Feedback type="invalid">
                {errors.confirmpassword}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-6">
          <Form.Group className="position-relative mb-3" controlId="validationFormikfile">
            <Form.Label>File</Form.Label>
            <Form.Control
              type="file"
              required
              name="file"
              onChange={handleChange}
              isInvalid={!!errors.file}
            />
            <Form.Control.Feedback type="invalid">
              {errors.file}
            </Form.Control.Feedback>
          </Form.Group>
          </Row>
          <Form.Group className="mb-6">
            <Form.Check
              required
              name="terms"
              label="Agree to terms and conditions"
              onChange={handleChange}
              isInvalid={!!errors.terms}
              feedback={errors.terms}
              feedbackType="invalid"
              id="validationFormikform"
            />
          </Form.Group>
          <Button type="submit" onClick={handleSubmit}>Submit form</Button>
        </Form>
      )}
    </Formik>
    </>
  );
}

export default Forms;