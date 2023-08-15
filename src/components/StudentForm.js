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
        //console.log(e.target.value);
        //console.log(newFormAnswer);
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
        <div className='container'>
            <h1 className='text'>Student Registration Form</h1>
            <form name="studentForm" onSubmit={handleSubmit}>
                <label >Name :
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <br /><br />
                <label >Email :
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <br /><br />
                <label >Register Number :
                    <input type="number" value={registerNumber} onChange={(e) => setRegisterNumber(e.target.value)} />
                </label>
                <br /><br />
                <label >Year of Study :
                    <input type="number" value={year} onChange={(e) => setYear(e.target.value)} />
                </label>
                <br /><br />

                <label >College Name :
                    <select value={college} onChange={handleCollegeChange}>
                        <option value=''>Select College Name:</option>
                        {collegeOptions?.map((collegeOption) => (
                            <option key={collegeOption} value={collegeOption}>
                                {collegeOption}
                            </option>
                        ))}
                    </select>
                </label>
                <br /><br />
                {college && <label >Department Name :
                    <select value={department} onChange={(e) => setDepartment(e.target.value)}>
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
                <label >Category : 
                    <select value={category} onChange={handleCategoryChange}>
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
                    <label >Questions :
                        <div>
                            {categoryQuestions[category].questions?.map((categoryQuestion, index) => {
                                console.log("hi");
                                return <div key={index}>
                                    <label>Question {index + 1} : </label>
                                    <p value={categoryQuestion.question} >{categoryQuestion.question}</p>
                                    <label>Answer : </label>
                                    <input type="text" value={categoryQuestion.answer} onChange={(e) => handleAnswerChange(index, e)}/>   
                                    
                                </div>
                            })}
                        </div>
                    </label>
                )}

                <input type='submit' />

            </form>
        </div>
    )
}

export default StudentForm