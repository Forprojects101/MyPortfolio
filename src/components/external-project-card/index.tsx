import { Fragment, useState } from 'react';
import LazyImage from '../lazy-image';
import { ga, skeleton } from '../../utils';
import { SanitizedExternalProject } from '../../interfaces/sanitized-config';

const ExternalProjectCard = ({
  externalProjects,
  header,
  loading,
  googleAnalyticId,
}: {
  externalProjects: SanitizedExternalProject[];
  header: string;
  loading: boolean;
  googleAnalyticId?: string;
}) => {
  const [filter, setFilter] = useState<'All' | 'Finished' | 'In Progress'>('All');

  const filteredProjects = externalProjects.filter((item) => {
    if (filter === 'All') return true;
    if (filter === 'Finished') return !item.underDevelopment;
    if (filter === 'In Progress') return item.underDevelopment;
    return true;
  });

  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < externalProjects.length; index++) {
      array.push(
        <div className="card shadow-lg compact bg-base-100" key={index}>
          <div className="p-8 h-full w-full">
            <div className="flex flex-col items-center">
              <div className="w-full">
                <div className="flex items-start px-4">
                  <div className="w-full">
                    <h2>
                      {skeleton({
                        widthCls: 'w-32',
                        heightCls: 'h-8',
                        className: 'mb-3 mx-auto',
                      })}
                    </h2>
                    <div className="w-full max-w-[200px] mx-auto">
                      {skeleton({
                        widthCls: 'w-full',
                        heightCls: 'h-32',
                        shape: 'rounded-lg',
                      })}
                    </div>
                    <div className="mt-4">
                      {skeleton({
                        widthCls: 'w-full',
                        heightCls: 'h-4',
                        className: 'mx-auto',
                      })}
                    </div>
                    <div className="mt-2 flex items-center flex-wrap justify-center">
                      {skeleton({
                        widthCls: 'w-full',
                        heightCls: 'h-4',
                        className: 'mx-auto',
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>,
      );
    }

    return array;
  };

  const renderExternalProjects = () => {
    return filteredProjects.map((item, index) => (
      <a
        className="card shadow-lg compact bg-base-100 cursor-pointer transition-all duration-300 hover:shadow-xl"
        key={index}
        href={item.link}
        onClick={(e) => {
          e.preventDefault();

          try {
            if (googleAnalyticId) {
              ga.event('Click External Project', {
                post: item.title,
              });
            }
          } catch (error) {
            console.error(error);
          }

          window?.open(item.link, '_blank');
        }}
      >
        <div className="p-8 h-full w-full">
          <div className="flex flex-col items-center">
            <div className="w-full">
              <div className="px-4">
                <div className="text-center w-full">
                  <h2 className="font-medium text-center opacity-60 mb-1">
                    {item.title}
                  </h2>
                  {item.underDevelopment ? (
                    <div className="flex justify-center mb-4">
                      <span className="badge badge-primary badge-outline font-semibold py-3 px-4 shadow-sm bg-base-100 backdrop-blur-sm transition-transform duration-300 hover:scale-105">
                        <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                        In Progress
                      </span>
                    </div>
                  ) : (
                    <div className="flex justify-center mb-4">
                      <span className="badge badge-success badge-outline font-semibold py-3 px-4 shadow-sm bg-base-100 backdrop-blur-sm transition-transform duration-300 hover:scale-105">
                        <span className="w-2 h-2 rounded-full bg-success mr-2"></span>
                        Finished
                      </span>
                    </div>
                  )}
                  {item.imageUrl && (
                    <div className="relative mb-5 group overflow-hidden rounded-xl border border-base-300 shadow-sm hover:shadow-lg transition-all">
                      <LazyImage
                        src={item.imageUrl}
                        alt={'project thumbnail'}
                        className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                        placeholder={skeleton({
                          widthCls: 'w-full',
                          heightCls: 'h-56',
                          shape: '',
                        })}
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-semibold py-2 px-5 rounded-full bg-black bg-opacity-50 backdrop-blur-md">
                          {item.underDevelopment ? 'Coming Soon' : 'View Project'}
                        </span>
                      </div>
                    </div>
                  )}
                  <p className="mt-2 text-base-content text-opacity-60 text-sm text-justify">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    ));
  };

  return (
    <Fragment>
      <div className="col-span-1 lg:col-span-2">
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2">
            <div className="card compact bg-base-100 shadow bg-opacity-40">
              <div className="card-body">
                <div className="mx-3 flex flex-col sm:flex-row items-center justify-between mb-6">
                  <h5 className="card-title mb-3 sm:mb-0">
                    {loading ? (
                      skeleton({ widthCls: 'w-40', heightCls: 'h-8' })
                    ) : (
                      <span className="text-base-content opacity-70">
                        {header}
                      </span>
                    )}
                  </h5>
                  {!loading && (
                    <div className="flex gap-2 flex-wrap justify-center">
                      <button
                        className={`btn btn-sm rounded-full ${filter === 'All' ? 'btn-neutral' : 'btn-ghost'}`}
                        onClick={() => setFilter('All')}
                      >
                        All
                      </button>
                      <button
                        className={`btn btn-sm rounded-full ${filter === 'Finished' ? 'btn-success text-white' : 'btn-ghost'}`}
                        onClick={() => setFilter('Finished')}
                      >
                        Finished
                      </button>
                      <button
                        className={`btn btn-sm rounded-full ${filter === 'In Progress' ? 'btn-primary text-white' : 'btn-ghost'}`}
                        onClick={() => setFilter('In Progress')}
                      >
                        In Progress
                      </button>
                    </div>
                  )}
                </div>
                <div className="col-span-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {loading ? renderSkeleton() : renderExternalProjects()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ExternalProjectCard;
