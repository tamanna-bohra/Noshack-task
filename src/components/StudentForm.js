import React, { useState } from 'react'

const StudentForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [registerNumber, setRegisterNumber] = useState("");
    const [year, setYear] = useState("");
    const [college, setCollege] = useState([]);
    const [department, setDepartment] = useState([]);
    const categoryOptions = ['Sports', 'Academics', 'Placements']
    const categoryQuestions = {
        "Sports": {
            questions: [{
                question: "What sports do you play?",
                answer: ""
            },
            {
                question: "Do you have any remarkable acheivement in the above sport?",
                answer: ""
            }]
        },
        "Academics": {
            questions: [{
                question: "What is your CGPA?",
                answer: ""
            },
            {
                question: "Mention your certifications below.",
                answer: ""
            }]
        },
        "Placements": {
            questions: [{
                question: "Which domain are you interested in?",
                answer: ""
            },
            {
                question: "Have you built any projects in the above domain?",
                answer: ""
            }
            ]
        }
    }

    const [category, setSelectedCategory] = useState('');
    const [formAnswer, setFormAnswer] = useState(categoryQuestions);
    const handleCategoryChange = (e) => {
        const selectedCategory = e.target.value;
        setSelectedCategory(selectedCategory);

    };
    const handleAnswerChange = (index,e) => {
        const newFormAnswer = {...formAnswer };
        newFormAnswer[category].questions[index].answer = e.target.value;
        console.log(e.target.value);
        console.log(newFormAnswer);
        setFormAnswer(newFormAnswer);
        
    };
   
    
    const collegeOptions = ['REC', 'SRM', 'VIT']
    const departmentOptions = {
        'REC': ['CSE', 'IT', 'AIML', 'RNA'],
        'SRM': ['ECE', 'CSE', 'EEE', 'AIDS'],
        'VIT': ['CSE', 'ECE', 'EEE', 'MECH']
    }
    const handleCollegeChange = (e) => {
        const selectedCollege = e.target.value;
        setCollege(selectedCollege);
        setDepartment('');
    };
    const handleSubmit=(e)=>{
        document.studentForm.submit();
        document.studentForm.reset();
        e.preventDefault();
    }

    return (
        <div className=' w-screen h-full px-8 bg-slate-400 '>
            <h1 className='text font-bold text-xl py-10'>Student Registration Form</h1>
          <div className='container'>
                
            <form name="studentForm" className="grid grid-cols-2 gap-4 " onSubmit={handleSubmit}>
           
                <label className='col-start-1 col-end-2'>Name :&nbsp;
                    <input className="border-black border-solid border-2 hover:border-pink-400  rounded p-1 pr-1 col-start-2 col-end-3 col-span-1" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                
                <br /><br />
                
                <label className='col-start-1 col-end-2'>Email :&nbsp;
                    <input className="border-black border-solid border-2  hover:border-pink-400 col-start-2 col-end-3 rounded p-1 pr-1 " type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                
                <br /><br />
               
                <label className='col-start-1 col-end-2'>Register Number :&nbsp;
                    <input className="border-black border-solid border-2  hover:border-pink-400 col-start-2 col-end-3 rounded p-1 pr-1 " type="number" value={registerNumber} onChange={(e) => setRegisterNumber(e.target.value)} />
                </label>
                
                <br /><br />
                
                <label className='col-start-1 col-end-2'>Year of Study :&nbsp;
                    <input className="border-black border-solid border-2  hover:border-pink-400 col-start-2 col-end-3 rounded p-1 pr-1 " type="number" value={year} onChange={(e) => setYear(e.target.value)} />
                </label>
               
                <br /><br />

                <label className='col-start-1 col-end-2'>College Name :&nbsp;
                    <select className="border-black border-solid border-2  hover:border-pink-400 px-3  text-center col-start-2 col-end-3 rounded p-1 pr-1 " value={college} onChange={handleCollegeChange}>
                        <option value=''>Select College Name:</option>
                        {collegeOptions?.map((collegeOption) => (
                            <option key={collegeOption} value={collegeOption}>
                                {collegeOption}
                            </option>
                        ))}
                    </select>
                </label>
                <br /><br />
                {college && <label className='col-start-1 col-end-2'>Department Name :&nbsp;
                    <select className="border-black border-solid border-2  hover:border-pink-400 px-3 text-center  p-1 pr-1 col-start-2 col-end-3 rounded" value={department} onChange={(e) => setDepartment(e.target.value)}>
                        <option value=''>Select Department: </option>
                        {departmentOptions[college]?.map((departmentOption) => (
                            <option value={departmentOption}>
                                {departmentOption}
                            </option>
                        ))}
                    </select>
                </label>
                }
                <br /><br />
                <label className='col-start-1 col-end-2'>Category : &nbsp;
                    <select className="border-black border-solid border-2  hover:border-pink-400  p-1 pr-2 col-start-2 col-end-3 text-center rounded" value={category} onChange={handleCategoryChange}>
                        <option value=''>Select Category</option>
                        {categoryOptions?.map((categoryOption) => (
                            <option value={categoryOption}>
                                {categoryOption}
                            </option>
                        ))}
                    </select>
                </label>
                <br /><br />
                {category && (
                    <label className='col-start-1 col-end-2'>Questions :&nbsp;
                        <div>
                            {formAnswer[category].questions?.map((categoryQuestion, index) => {
                                
                                return <div key={index}>
                                    <label >Question {index + 1} :&nbsp; </label>
                                    <p value={categoryQuestion.question} >{categoryQuestion.question}</p>
                                    <label >Answer : &nbsp;</label>
                                    <input  className="border-black border-solid border-2 p-1 pr-2 hover:border-pink-400 rounded" type="text" value={categoryQuestion.answer} onChange={(e) => handleAnswerChange(index, e)}/>   
                                    
                                </div>
                            })}
                        </div>
                    </label>
                )}

                <input type='submit' className='bg-black text-white p-1 pr-1 rounded-lg hover:bg-purple-400 hover:text-black' />

            </form>
            </div>
            </div>
        
    )
}

export default StudentForm