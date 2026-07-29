import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { Brain, ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="flex-1 flex items-center justify-center py-12">
      <Card variant="default" className="max-w-md w-full text-center space-y-6 p-8">
        <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mx-auto">
          <Brain className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-4xl font-extrabold text-blue-600">404</span>
          <h1 className="text-xl font-bold text-slate-900">Page Not Found</h1>
          <p className="text-xs text-slate-500">
            The requested concept route does not exist or has been moved.
          </p>
        </div>

        <div>
          <NavLink to="/">
            <Button
              variant="primary"
              size="md"
              icon={<ArrowLeft className="w-4 h-4" />}
            >
              Back to Experiments
            </Button>
          </NavLink>
        </div>
      </Card>
    </div>
  );
};
