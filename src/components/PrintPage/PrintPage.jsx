import React, { useEffect } from 'react';

const PrintPage = () => {
  useEffect(() => {
    window.print();
  });

  return (
    <div data-testid="PRINT_PAGE">
      Print
    </div>
  );
};

export default PrintPage;
