import styles from './style.module.css'

const DocsPage = ({ params }: { params: { id?: string[] } }) => {
  return (
    <div>
      <h1 className="mb-3 text-2xl font-semibold">ID is {params.id}</h1>
      <h1 className={styles.title}>ID is {params.id}</h1>
    </div>
  )
}

export default DocsPage
