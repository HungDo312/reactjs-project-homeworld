import React, { useState } from 'react'
import { dataQuestion } from './DataHomework/Data4'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

type propsQuestion = {
    id: number,
    title: string,
    description: string,
};
const Questions = () => {
    const [questions] = useState<propsQuestion[]>(dataQuestion)
    const [isVisible, setIsVisible] =useState<number | null>(null);
    const [icon, setIcon] = useState(faPlus)

    const toggleVisibility = (questionId: number) => {
        if (isVisible === questionId) {
            setIsVisible(null);
            setIcon(faPlus)
          } else {
            setIsVisible(questionId);
            setIcon(faMinus)
          }
      };
  return (
    <div className='h-full mw-screen bg-[#cffafe]'>
        <div className='flex items-center justify-center min-h-screen '>
            <section className='h-auto bg-white w-[800px] max-w-[800px] rounded p-[2.5rem] shadow-2xl my-20 mx-auto'>
            <h1 className='text-center mb-[3rem] text-[#334155] font-normal text-[3.052rem]'>Questions</h1>
            {questions.map((question)=> ( 
                 <article
                  key={question.id}
                  className='px-6 py-4 w-[720px] border-2 border-solid border-gray-300 rounded shadow-xl mb-8'>
                    <header className='flex justify-between'>
                        <h5>{question.title}</h5>
                        <button onClick={() => {toggleVisibility(question.id)}} className='' ><FontAwesomeIcon icon={icon} style={{color: "#050505",}} /></button>
                    </header>
                    {isVisible === question.id && (<p className='mt-[1rem]'>{question.description}</p>)}
                </article>))}
            </section>
        </div>
    </div>
  )
}

export default Questions