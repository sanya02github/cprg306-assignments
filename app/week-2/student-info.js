import Link from 'next/link';

const StudentInfo = () => {
    return (
        <div>
            <p>Your Name: Sanya</p>
            <p>
                GitHub Repository;{''}
                <Link href="https://github.com/sanya02git" passHref>
                    <a target="-blank">Your GitHub Repo</a>
                </Link>
            </p>
        </div>
    );
};

export default StudentInfo;