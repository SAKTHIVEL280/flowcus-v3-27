import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Settings, Plus, Trash2, Edit2 } from "lucide-react";
interface Task {
  id: string;
  text: string;
  completed: boolean;
}
export const FocusTasks: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([{
    id: "1",
    text: "Complete project proposal",
    completed: false
  }, {
    id: "2",
    text: "Review code changes",
    completed: true
  }, {
    id: "3",
    text: "Update documentation",
    completed: false
  }]);
  const [newTask, setNewTask] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState("");
  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, {
        id: Date.now().toString(),
        text: newTask.trim(),
        completed: false
      }]);
      setNewTask("");
    }
  };
  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };
  const toggleTask = (id: string) => {
    setTasks(tasks.map(task => task.id === id ? {
      ...task,
      completed: !task.completed
    } : task));
  };
  const startEdit = (task: Task) => {
    setEditingId(task.id);
    setEditText(task.text);
  };
  const saveEdit = () => {
    if (editText.trim()) {
      setTasks(tasks.map(task => task.id === editingId ? {
        ...task,
        text: editText.trim()
      } : task));
    }
    setEditingId(null);
    setEditText("");
  };
  const cancelEdit = () => {
    setEditingId(null);
    setEditText("");
  };
  return <Card className="bg-gradient-paper border-2 border-paper-lines shadow-paper">
      <CardHeader>
        <CardTitle className="flex items-center justify-between font-arkhip text-xl text-pencil-graphite">
          Focus Tasks
          
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Add new task */}
        <div className="flex gap-2">
          <Input placeholder="Add a focus task..." value={newTask} onChange={e => setNewTask(e.target.value)} onKeyPress={e => e.key === 'Enter' && addTask()} className="flex-1 cursor-target" />
          <Button variant="sketch" size="icon" onClick={addTask} className="cursor-target">
            <Plus className="w-4 h-4" />
          </Button>
        </div>

        {/* Task list */}
        <div className="space-y-3">
          {tasks.map(task => <div key={task.id} className="flex items-center gap-3 group">
              <Checkbox checked={task.completed} onCheckedChange={() => toggleTask(task.id)} className="cursor-target" />
              {editingId === task.id ? <div className="flex-1 flex gap-2">
                  <Input value={editText} onChange={e => setEditText(e.target.value)} onKeyPress={e => {
              if (e.key === 'Enter') saveEdit();
              if (e.key === 'Escape') cancelEdit();
            }} className="flex-1 cursor-target" autoFocus />
                  <Button variant="ghost" size="icon" onClick={saveEdit} className="cursor-target h-8 w-8">
                    ✓
                  </Button>
                  <Button variant="ghost" size="icon" onClick={cancelEdit} className="cursor-target h-8 w-8">
                    ✕
                  </Button>
                </div> : <>
                  <span className={`flex-1 font-kalam text-sm ${task.completed ? 'line-through text-muted-foreground' : 'text-pencil-graphite'}`}>
                    {task.text}
                  </span>
                  <div className="opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity flex gap-1">
                    <Button variant="ghost" size="icon" onClick={() => startEdit(task)} className="cursor-target h-8 w-8">
                      <Edit2 className="w-3 h-3" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => deleteTask(task.id)} className="cursor-target h-8 w-8 text-destructive hover:text-destructive">
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </div>
                </>}
            </div>)}
        </div>
      </CardContent>
    </Card>;
};