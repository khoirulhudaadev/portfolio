import GitHubCalendar from 'react-github-calendar';
import '../App.css';

interface FilteredGitHubCalendarProps {
    username: string;
}

const FilteredGitHubCalendar = ({ username }: FilteredGitHubCalendarProps) => {
    return (
        <div className='bg-white flex items-center h-full w-full justify-start px-8 py-8 md:rounded-[16px]'>
            <GitHubCalendar username={username} />
        </div>
    )
};

export default FilteredGitHubCalendar;