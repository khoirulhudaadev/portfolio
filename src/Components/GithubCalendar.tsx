import GitHubCalendar from 'react-github-calendar';
import '../App.css';

interface FilteredGitHubCalendarProps {
    username: string;
}

const FilteredGitHubCalendar = ({ username }: FilteredGitHubCalendarProps) => {
    return (
        <div className='bg-white flex items-center justify-start px-8 py-8 rounded-[16px]'>
            <GitHubCalendar username={username} />
        </div>
    )
};

export default FilteredGitHubCalendar;