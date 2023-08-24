import {List, Button} from './Statistics/Statistic.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <List>
            {options.map(option => (
        <li key={option}>
          <Button type="button" onClick={() => onLeaveFeedback(option)}>
            {option}
          </Button>
        </li>
      ))}
      </List>
    )
}