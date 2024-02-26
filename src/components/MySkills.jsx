import data from '../myskills.json';

const MySkills =() => {
  return (
    <>
    <section className='skills-section' id='mySkills'>
      <div className='skills-container'>
        <h2>My Skills</h2>
        <div className='skill-items-container'>
          {data?.skills?.map((item, index) => (
            <div key={index} className='skill-items-card'>
              <p className='skill-items-name'>{item.name}</p>
              </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default MySkills;