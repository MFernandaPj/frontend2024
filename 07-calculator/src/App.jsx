import './App.css'
const numberButtonsClasses= 'btn btn-info w-100'
const operatorButtonsClasses= 'btn btn-warning w-100'
const equalButtonsClasses= 'btn btn-danger w-100'

function App() {

  return (
    <div>
      <h1>Calculator</h1>
<hr />
<table className='center'>
  <tbody>
    <tr>
      <td className='text-end' colSpan={4}>
        <h1>0</h1>
       </td>
    </tr>
    <tr>
    <td className='text-end' colSpan={1}>
        <button
        className={operatorButtonsClasses}
        type='button'>
            C
          </button>
       </td>
       <td className='text-end' colSpan={1}>
        <button
        className={operatorButtonsClasses}
        type='button'>
            {'<<'}
          </button>
       </td>
       <td className='text-end' colSpan={1}>
        <button
        className={operatorButtonsClasses}
        type='button'>
            %
          </button>
       </td>
       <td className='text-end' colSpan={1}>
        <button
        className={operatorButtonsClasses}
        type='button'>
            /
          </button>
       </td>
    </tr>
    <tr>
    <td className='text-end' colSpan={1}>
        <button
        className={numberButtonsClasses}
        type='button'>
           7
        </button>
       </td>
       <td className='text-end' colSpan={1}>
        <button
        className={numberButtonsClasses}
        type='button'>
           8
        </button>
       </td>
       <td className='text-end' colSpan={1}>
        <button
        className={numberButtonsClasses}
        type='button'>
           9
        </button>
       </td>
       <td className='text-end' colSpan={1}>
        <button
        className={operatorButtonsClasses}
        type='button'>
            *
          </button>
       </td>
    </tr>
    <tr>
    <td className='text-end' colSpan={1}>
        <button
        className={numberButtonsClasses}
        type='button'>
           4
        </button>
       </td>
       <td className='text-end' colSpan={1}>
        <button
        className={numberButtonsClasses}
        type='button'>
           5
        </button>
       </td>
       <td className='text-end' colSpan={1}>
        <button
        className={numberButtonsClasses}
        type='button'>
           6
        </button>
       </td>
       <td className='text-end' colSpan={1}>
        <button
        className={operatorButtonsClasses}
        type='button'>
            -
          </button>
       </td>
    </tr>
    <tr>
    <td className='text-end' colSpan={1}>
        <button
       className={numberButtonsClasses}
        type='button'>
           1
        </button>
       </td>
       <td className='text-end' colSpan={1}>
        <button
          className={numberButtonsClasses}
        type='button'>
           2
        </button>
       </td>
       <td className='text-end' colSpan={1}>
        <button
        className={numberButtonsClasses}
        type='button'>
           3
        </button>
       </td>
       <td className='text-end' colSpan={1}>
        <button
        className={operatorButtonsClasses}
        type='button'>
            +
          </button>
       </td>
    </tr>
    <tr>
      <td className='text-center' colSpan={2}>
        <button
        className={numberButtonsClasses}
        type='button'>
           0
        </button>
       </td>
       <td className='text-end' colSpan={1}>
        <button
        className={numberButtonsClasses}
        type='button'>
           .
        </button>
       </td>
       <td className='text-end' colSpan={1}>
        <button
        className={equalButtonsClasses}
        type='button'>
            =
          </button>
       </td>
    </tr>

  </tbody>
</table>
    </div>
  )
}

export default App
