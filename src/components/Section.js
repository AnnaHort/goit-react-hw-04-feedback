import PropTypes from 'prop-types';
import { Container } from './Statistics/Statistic.styled';

const Section = ({ title, children }) => {
  return (
    <Container>
      <h2>{title}</h2>
      {children}
    </Container>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
