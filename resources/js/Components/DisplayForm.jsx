import { useForm } from '@inertiajs/react';

export default function CreateIssue() {
  const { data, setData, post, errors } = useForm({
    title: '',
    description: '',
    status: 'open',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('issues.store'));
  };

  return (
    <div>
      <h1>Create New Issue</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={data.title}
            onChange={(e) => setData('title', e.target.value)}
          />
          {errors.title && <div>{errors.title}</div>}
        </div>

        <div>
          <label>Description:</label>
          <textarea
            value={data.description}
            onChange={(e) => setData('description', e.target.value)}
          />
          {errors.description && <div>{errors.description}</div>}
        </div>

        <div>
          <label>Status:</label>
          <select
            value={data.status}
            onChange={(e) => setData('status', e.target.value)}
          >
            <option value="open">Open</option>
            <option value="in_progress">In Progress</option>
            <option value="closed">Closed</option>
          </select>
          {errors.status && <div>{errors.status}</div>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
